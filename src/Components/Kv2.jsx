function Kv2({elements}) {
    return(
        <>
        {
            elements.map((e, i) => <h1 key={i} style={{color:'black' + e}}></h1>)
        }
        </>
    )
}

export default Kv2;