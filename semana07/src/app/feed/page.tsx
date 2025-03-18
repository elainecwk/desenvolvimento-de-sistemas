import Header from "@/components/Header";
import "./styles.css"
import Image from "next/image";

import cover from '@/assets/cover.avif';
import Avatar from "@/components/Avatar";
import { PiPencilLineBold } from "react-icons/pi";
import Post from "@/components/Post";

export default function Feed() {
    return (
        <div>
            <Header />
            <div className="container">
                <aside className="sidebar">
                    <Image src={cover} alt="cover" className="cover" />

                    <div className="profile">
                        <Avatar src="https://github.com/gusttavosouza.png" hasBorder />
                        <strong>Gustavo Souza</strong>
                        <span>Full-Stack Developer</span>

                        <footer>
                            <button className="button-edit-profile">
                                <PiPencilLineBold />
                                Editar seu perfil
                            </button>
                        </footer>

                    </div>

                </aside>

                <main className="main">
                    <Post post={{} as any} />
                    <Post post={{} as any} />
                    <Post post={{} as any} />
                </main>
            </div>
        </div>
    )
}
