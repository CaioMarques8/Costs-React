import { useState, useEffect } from 'react'


import styles from './projectFrom.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function Projectform({handleSubmit, btnText, projectData}){


    const [project, setproject] =useState(projectData || {})
    const [categories, setCategories] = useState([])

    useEffect( ( ) => {

        fetch("http://localhost:5000/categories",{
        method : "GET",
        headers: {
            'Content-Type': 'application/json'
        }
        }).then((resp) => resp.json())
          .then((data) => {
            setCategories(data)
        })
          .catch((err) => console.log(err))

    },[])


    const submit = (e)=>{
        e.preventDefault();
        handleSubmit(project);
    }

    function handleChange(e){
        setproject( { ...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e){
        setproject( { ...project, category: {
            id: e.target.value,
            name:e.target.options[e.target.selectedIndex].text,
        },
    })
    }


    return(
        <form onSubmit={submit} className={styles.form}>
            <Input  type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" handleOnChange={handleChange} value={project.name ? project.name : ''}/>

            <Input  type="tnumber" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total" handleOnChange={handleChange} value={project.budget ? project.budget : ''}/>

            <Select name="categoty_id" text="Selecione a categoria" options={categories}  handleOnChange={handleCategory} value={project.category ? project.category.id : ''} />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default Projectform