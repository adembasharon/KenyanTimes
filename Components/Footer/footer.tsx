import styles from "./footer.module.css"
import Image from "next/image"
import Link from "next/link"

function Footer(){
    return(
        <div className={styles.footerContainer}>
<div className={styles.footerMain}>
    <div className={styles.footerContent}>
<div className={styles.footerlist}>
    <div>
<h2>News</h2>
</div>
<div>
    <p>Sports</p>
</div>
<div>
    <p>Life & Style</p>
</div>
<div>
    <p>Entertainment</p>
</div>
<div>
    <p>Business</p>
</div>
<div>
    <p>Health</p>
</div>
<div>
    <p>Politics</p>
</div>

</div>

<div className={styles.footerlist}>
    <div>
<h2>Sports</h2>
</div>
<div>
    <p>Athlete</p>
</div>
<div>
    <p>Football</p>
</div>
<div>
    <p>Swimming</p>
</div>
<div>
    <p>Rugby</p>
</div>
<div>
    <p>MotorSport</p>
</div>
<div>
    <p>Others</p>
</div>

</div>

<div className={styles.footerlist}>
    <div>
<h2>Business</h2>
</div>
<div>
    <p>Finance & Market</p>
</div>
<div>
    <p>Leadership</p>
</div>
<div>
    <p>Enterprises</p>
</div>
<div>
    <p>Currency</p>
</div>
</div>
<div className={styles.footerlist}>
    <div>
<h2>Life & Style</h2>
</div>
<div>
    <p>Relationship</p>
</div>
<div>
    <p>Family</p>
</div>
<div>
    <p>Culture</p>
</div>
<div>
    <p>Travel</p>
</div>
<div>
    <p>Art & Books</p>
</div>
</div>

<div className={styles.footerlist}>
    <div>
<h2>Health</h2>
</div>
<div>
    <p>Women's Health</p>
</div>
<div>
    <p>Men's Health</p>
</div>
<div>
    <p>COVID</p>
</div>
<div>
    <p>Tips</p>
</div>
<div>
    <p>Expert Corner</p>
</div>
<div>
    <p>Emergency</p>
</div>

</div>

<div className={styles.footerlistIcon}>
    <div>
<h2>Social</h2>
</div>
<div>
    <Image src="/facebook.svg" alt="facebook" width={25} height={25}/>
</div>
<div>
<Image src="/instagram.svg" alt="facebook" width={25} height={25}/>
</div>
<div>
<Image src="/twitter.svg" alt="facebook" width={25} height={25}/>
</div>
<div>
<Image src="/youtube.svg" alt="facebook" width={25} height={25}/>
</div>
<div>
<Image src="/tictok.svg" alt="facebook" width={25} height={25}/>
</div>

</div>


    </div>

</div>



        </div>
    )
}
export default Footer