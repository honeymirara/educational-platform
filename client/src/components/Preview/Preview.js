
import style from './style.module.css'

export default function Header() {
    return (
        <div className={style.preview}>
            <div className={style.wrapper}>

                <div className={style.btns}>
                    <div className={style.info}>
                        <p>E-COURSE PLATFORM</p>
                        <h1>Learning and teaching online, made easy</h1>
                        <p>Any subject, in any language, on any device, for all ages</p>
                        <div className={style.btnAbout}>About platform</div>
                        <div className={style.statistics}>
                            <div>
                                <div className={style.thunder}></div>
                                <div >600<span>+</span></div>
                            </div>
                            <p>students</p>
                        </div>
                    </div>

                </div>
                <div className={style.PreviewImage}></div>
            </div>
            <div className={style.wrapperBCG}>
                <div className={style.language}>
                    <div className={style.imgLanguage}></div>
                    <div className={style.information}>
                        <h1>Learn language in a playful way</h1>
                        <p>Make Learning programming language more fun with mini-games</p>
                        <div className={style.btnImgs}>
                            <div className={style.imgSprint}></div>
                            <div className={style.imgTasks}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.knowledge}>
                <div className={style.knowledgeText}>
                    <h1>Increase your knowledge</h1>
                    <p>Traditional and new effective approaches to</p>
                   <div className={style.bottonKnowledge}>Textbook</div>
                </div>
                <div className={style.knowledgeImg}></div>
            </div>
        </div>
    )
}
