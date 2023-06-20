import Image from "next/image";
function Logo(props:any){
    const {renderDefault, title} = props;

    return(
        <>
        <Image src="/desk.png" alt="logo" width={25} height={23}/>


        <>{renderDefault(props)}</>
        </>
    )

}
export default Logo;