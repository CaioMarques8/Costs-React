import Projectform from '../project/ProjectForm'
import styles from './NewProjects.module.css'

import {useNavigate} from 'react-router-dom'

function NewProject(){

    const navigate = useNavigate()

    function createPost(project){
        //iniciando o custo e Serviços
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(project),


        }).then(resp => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            navigate("/projects", {state:{message: 'Projeto criado com sucesso'}})
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <Projectform handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject