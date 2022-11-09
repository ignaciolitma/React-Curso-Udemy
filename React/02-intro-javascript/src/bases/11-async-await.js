// const getImagenPromise = () => new Promise( resolve => resolve("https://algoimagen.com")  );
// getImagenPromesa().then(console.log);

const getImagen = async () =>
{
    try
    {
        const apiKey = "XRHjVCVknRCcKRfwYAflpAIvIFcRLo0f";
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await respuesta.json();
        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);
   
    } catch (error)
    {
        //Manejo del error.
        console.error(error);
    }

}

getImagen();


// const apiKey = "XRHjVCVknRCcKRfwYAflpAIvIFcRLo0f"

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
//     .then(resp => resp.json())
//     .then(({ data }) =>
//     {
//         const {url} = data.images.original
//         const img = document.createElement("img");
//         img.src = url;
//         document.body.append(img);
//     }).catch(console.warn);