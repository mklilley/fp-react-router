import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"

export default function Cohort() {

    const {name} = useParams();
    const [students, setStudents] = useState([])

    useEffect(()=>{
        async function fetchData(){
         const data = await fetch(`https://raw.githubusercontent.com/getfutureproof/fp_study_notes_hello_github/main/${name}/roster.json`)
         const json = await data.json()
         setStudents(json.students)
       }
       fetchData()
     }, [name])

    return(
        <>
        <h1>{name}</h1>
        {students.map(s => <p key={s.name}>{s.name}</p> )}
        </>
    )

}