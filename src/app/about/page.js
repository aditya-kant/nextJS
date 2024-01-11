const takeTime=async () => {
    await new Promise((resolve)=>{
        setTimeout(resolve,3000);
    });
} 

export default async function About(){
    await takeTime();
    return (
        <div>
        <h1>INSIDE About </h1>
        </div>
    );
}