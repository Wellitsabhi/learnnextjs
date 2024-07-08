export default function Docs({
    params
}:{
    params:{slug:string[]}    // params is OBJECT with key 'slug' AND TYPE 'array of string'
}) {
    if(params.slug.length === 2) {
        return <h2>
            View docs for feature {params.slug[0]} and concept {params.slug[1]}
            </h2>
    }else if(params.slug.length === 1 ){
        return <h1>Viewing docs for feature {params.slug[0]}</h1>
    }
    return <h1>Docs home page</h1>
}