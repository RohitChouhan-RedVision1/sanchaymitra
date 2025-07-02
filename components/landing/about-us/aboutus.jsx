
import styles from './AboutSection.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection({siteData}) {
    
    return (
        <div className={`${styles.aboutSectionArea} main_section`}>
            <div class="max-w-screen-xl mx-auto">
                <div class="grid   md:grid-cols-12 items-center">
                    <div class="col-span-1"></div>
                    <div class="col-span-6">
                        <div className={styles.aboutImagesArea}>
                            <div className={styles.img1}>
                                <Image
                                    src="/all-images/about/about-img1.png"
                                    alt="About Image 1"
                                    width={50}
                                    height={400}
                                    layout="responsive"
                                />
                            </div>
                            <Image
                                src="/elements/elements6.svg"
                                alt="About Image 1"
                                width={350}
                                height={400}
                                // layout="responsive"
                                className={`${styles.elements6} aniamtion-key-1`}
                            />
                        </div>
                    </div>
                    <div class="col-span-5">
                        <div className={`${styles.aboutHeading} heading1`}>
                            <h5>About Us</h5>
                            <div class="space16"></div>
                            <h2 class="text-anime-style-1">Grow Your Wealth with Mutual Fund Services</h2>
                            <div class="space16"></div>
                            <p>Welcome to {siteData.websiteName}, your trusted financial companion in India. We understand that your financial journey is more than just numbers; it&apos;s a story of dreams, aspirations, and the legacy you want to leave behind. At {siteData.websiteName}, we are driven by the belief that everyone deserves a secure and prosperous future.</p>
                            <div class="space32"></div>
                            <div className={styles.peraBox} >
                                <div className={`${styles.icons} p-4`}>
                                    <Image
                                        src="/icons/about-icon.svg"
                                        alt="About Image 1"
                                        width={400}
                                        height={400}
                                    // layout="responsive"
                                    />
                                </div>
                                <div className={styles.text}>
                                    <Link href="/">Financial Solution</Link>
                                    <div class="space10"></div>
                                    <p>Growth. Dedication. Trust - Your financial well-being is our shared responsibility!
                                    </p>
                                </div>
                            </div>
                            <div class="space32"></div>
                            <div class="btn-area1">
                                <Link href="/about-us" class="vl-btn1">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
