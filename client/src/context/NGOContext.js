import { createContext, useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs } from "firebase/firestore";

const  NGOContext = createContext();

const ContextProvider = ({children})=>{
    const [sectorSearched, setSectorSearched] = useState([]);
    const [nameSearched, setNameSearched] = useState([]);
    const [NGOs, setNGOs] = useState([]);
    const NGOCollectionRef = collection(db,"ngo");
    const [result, setResult] = useState([]);
    const [searchedNgo, setSearchedNgo] = useState([]);
    const [randomThreeNgo, setRandomThreeNgo] = useState([]);


    const [NGOName, setNGOName] = useState('');

    useEffect(()=>{
        console.log('Firestore access _1');
        const getNGOs =  async ()=>{
            const data = await getDocs(NGOCollectionRef);
            setNGOs(data.docs.map((doc) => ({...doc.data()})));
            console.log('ngo created')
        }

        getNGOs()
    }, []);

    const getSectorResults = async (query)=>{
        console.log(query);
        const ngos=[];
        let i=0;
        const data = await getDocs(NGOCollectionRef);
        data.docs.forEach((ngo)=>{
            if((i<5) && ngo.data().sector && (ngo.data().sector.toLowerCase().indexOf(String(query))!==-1)){
                console.log("found");
                // console.log(ngo.sector)
                ngos.push({...ngo.data()})
                i++;
            }  
        })

        setSectorSearched(ngos)
        console.log(sectorSearched);

    }

    const getNameResults = async (query)=>{
        console.log(query);
        const ngos=[];
        let i=0;
        const data = await getDocs(NGOCollectionRef);
        data.docs.forEach((ngo)=>{
            if((i<5) && ngo.data().sector && (ngo.data().ngo_name.toLowerCase().indexOf(String(query))!==-1)){
                console.log("found");
                // console.log(ngo.sector)
                ngos.push({...ngo.data()})
                i++;
            }  
        })

        setNameSearched(ngos)
        console.log(nameSearched);
    }

    const getNGODetail = async (query)=>{
        const NGO=[];
        const data = await getDocs(NGOCollectionRef);
        data.docs.forEach((item)=>{
            // console.log(item.data())

            if(item.data().id === Number(query)){
                console.log(item.data())
                NGO.push({...item.data()})
            }
        })
       
        setSearchedNgo(NGO);
    }

    const getRandomThreeNgo = ()=>{
        const three=[]
        // console.log(NGOs)
        setRandomThreeNgo(NGOs.forEach((ngo)=>{
            if(ngo.id === 0 || ngo.id ===1 || ngo.id===2){
                three.push(ngo);
            }
        }))
        setRandomThreeNgo(three);

    }


    





    return (
        <NGOContext.Provider value={{
            getNameResults,
            getSectorResults,
            result,
            setSectorSearched,
            setNameSearched,
            sectorSearched,
            nameSearched,
            getNGODetail,
            searchedNgo,
            getRandomThreeNgo,
            randomThreeNgo,

        }}>
            {children}
        </NGOContext.Provider>
    )
}


export {ContextProvider, NGOContext}
