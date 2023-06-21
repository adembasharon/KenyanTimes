import Link from "next/link";
import styles from "./studionavbar.module.css";
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid";

function StudioNavbar(props:any){
    return(
        <>
        <div className={styles.studiocontainer}>
            <div>
                <Link href="/" className={styles.studiolink}>Go to the website</Link>
                </div>
                <div>
           <ArrowUturnLeftIcon className={styles.studioicon}/>
            </div>
            </div>

            <>{props.renderDefault(props)}</>
        </>
    )
}
export default StudioNavbar;