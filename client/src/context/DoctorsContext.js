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
        const getDoctors =  async ()=>{
            const data = await getDocs(DoctorCollectionRef);
            setDoctors(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            // console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            // console.log(ngos)
        }

        // getDoctors();
    }, []);

    const getServiceResults = async (query,loc)=>{
        const docs =[];
        console.log(query,loc)
        const data = await getDocs(DoctorCollectionRef);
        let i=0;
        data.docs.forEach((doc)=>{
            // console.log(doc.data().Practicing)
            if((i<5) && doc.data().Practicing && ((doc.data().Practicing.toLowerCase().indexOf(query.toLowerCase()))!==-1) &&  (doc.data()['City'].toLowerCase().indexOf(loc.toLowerCase()) !== -1 || doc.data()['State'].toLowerCase().indexOf(loc.toLowerCase()) !== -1) ){
                console.log("found in locality");
                docs.push({...doc.data(), id:doc.id})
                i++;
            }  
        })
        data.docs.forEach((doc)=>{
            // console.log(doc.data().Practicing)
            if((i<5) && doc.data().Practicing && ((doc.data().Practicing.toLowerCase().indexOf(query.toLowerCase()))!==-1)){
                console.log("found but not in locality");
                docs.push({...doc.data(), id:doc.id})
                i++;
            }  
        })
        // console.log(docs)
        setServiceSearched(docs);

    }


    const getDoctorDetail = async (query)=>{
        const docs=[];
        const data = await getDocs(DoctorCollectionRef);
        data.docs.forEach((item)=>{
            // console.log(item.data())
            if(item.id === query){
                console.log(item.data())
                docs.push({...item.data(),id:item.id})
            }
        })
        setResult(docs);
    }




    const getLocationResults = async (query)=>{
        const docs =[];
        const data = await getDocs(DoctorCollectionRef);
        let i=0;
        data.docs.forEach((doc)=>{
            if((i<5) && doc.data()['City'] && (((doc.data()['City'].toLowerCase()).indexOf(query.toLowerCase())!==-1) || ((doc.data()['State'].toLowerCase()).indexOf(query.toLowerCase())!==-1))){
                console.log("found");
                docs.push({...doc.data(), id:doc.id})
                i++;
            }  
        })

        console.log(docs)
        setLocationSearched(docs);
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
            getDoctorDetail
        }}>
            {children}
        </DoctorContext.Provider>
    )

}

export {ContextProvider, DoctorContext}