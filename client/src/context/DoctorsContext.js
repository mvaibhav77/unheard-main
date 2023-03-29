import { createContext, useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs } from "firebase/firestore";

const  DoctorContext = createContext();


const ContextProvider = ({children})=>{
    const [serviceSearched, setServiceSearched] = useState('');
    const [locationSearched, setLocationSearched] = useState('');

    // Firestore
    const [doctors, setDoctors] = useState([]);
    const DoctorCollectionRef = collection(db,"doctors");
    const [result, setResult] = useState([]);
  
    useEffect(()=>{
        console.log('Firestore access _1');
        const getNGOs =  async ()=>{
            const data = await getDocs(DoctorCollectionRef);
            setDoctors(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            // console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            // console.log(ngos)
        }

        getNGOs();
    }, []);

    const getServiceResults = async (query)=>{
        const data = await getDocs(DoctorCollectionRef);
        setResult(data.docs.map((doc)=>{
            const docs = [];
            console.log(doc)
            return {...doc.data(), id: doc.id}
        }))

    }



    const getLocationResults = async (query)=>{
        const data = await getDocs(DoctorCollectionRef);
        setResult(data.docs.map((doc)=>{
            // console.log(doc);
            // const docs = [];
            console.log(doc.data().City)
            if(doc.data().City == query){
                return {...doc.data(), id: doc.id}
            }
            // return {docs}
        }))

    }

    return(
        <DoctorContext.Provider value={{
            getLocationResults,
            getServiceResults,
            result,
            setServiceSearched,
            setLocationSearched,
            serviceSearched,
            locationSearched,

        }}>
            {children}
        </DoctorContext.Provider>
    )

}

export {ContextProvider, DoctorContext}