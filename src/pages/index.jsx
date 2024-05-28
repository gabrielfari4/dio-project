import { useCallback, useEffect, useMemo, useState } from "react";


const Teste = () => {

    const [age, setAge] = useState(36);
    const [name, setName] = useState('Gabriel');

    // useCallback - utilizado para memorizar uma função
    const handleChangeAge = useCallback(() => {
        console.log('age atual', age)
        const newAge = 10 * age;
        console.log('age atual', age, 'nova age', newAge)
        setAge(prev => prev === 36 ? 20 : 36)
    }, [age])
    
    const handleChangeName = useCallback(() => {
        setName(prev => prev === 'Gabriel' ? 'José' : 'Gabriel')
    }, [])
    
    // useMemo - utilizado para memorizar um cálculo, uma variável. Caso haja algum elemento no array, o useMemo vai memorizar conforme a mudança do elemento, caso não haja, a memória será do primeiro retorno obtido.
    /* const calculo = useMemo(() => {
        console.log('calculou')
        return 10 + age
    }, []) 

    console.log('renderizou', calculo) */
    

    // useEffect - utilizado para lidar com efeitos adversos. Disparado uma vez quando o array está vazio ou sempre que houver modificação no que foi colocado no array. 
    /* useEffect(() => {
        alert('renderizei')
    }, []) */

    return (
        <div>
            <p>
                Idade: {age}
            </p>
            <br />
            <p>
                Nome: {name}
            </p>
            <br />
            <button onClick={handleChangeAge}>Mudar idade</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={handleChangeName}>Mudar nome</button>
        </div>
    )
}

export default Teste;