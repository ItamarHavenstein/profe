import React from 'react';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/28792479?s=460&u=6e0fb5523c1df65393d446eba713e507e8bfe50f&v=4" alt="Itamar Havenstein" />
                <div>
                    <strong>Itamar Havenstein</strong>
                    <span>Matematica</span>
                </div>
            </header>
            <p>
                Aficcionado por matemática
                        <br /><br />
                        matemática é vida matemática e pop matemática é agro matemática é vida matemática e pop matemática é agro matemática é vida matemática e pop matemática é agro
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 80,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;