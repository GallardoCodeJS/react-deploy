import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Inicio from './Inicio.js';
import io2 from './img/io.jpg';
import cruz from './img/x2.png';

function Perfil() {

    return (

        <Route>
            <div className="Perfil">
                <div className="PerfilAtras">
                    <Link to="/Inicio"><img src={cruz} alt="Equis" /></Link>
                    <h1>-Ignacio Gallardo Leal-</h1>
                </div>

                <div className="PerfilCuerpo">
                    <img src={io2} alt="Nachito" />
                </div>
                <div className="Perfilinfo-left">
                    <h2>Datos personales</h2>
                    <p><b>Ciudad: </b>Montevideo, Tres Cruces</p>
                    <p><b>Correo: </b>Gallardoignacio1995@gmail.com</p>
                    <p><b>Linkedin: </b><a href="http://www.linkedin.com/in/ignacio-gallardo-leal-47b13415b" target="a">Perfil-Ignacio Gallardo-</a></p>
                    <p><b>Fecha de nacimiento: </b>11 de diciembre de 1995</p>
                    <p><b>Cedula de Identidad: </b>Vigente.</p>
                    <p><b>Carné de salud: </b>Vigente 2020.</p>
                    <p><b>Teléfono / Celular: </b>23091329 - 096627322</p>

                    <h2>Educación</h2>
                    <p>-Desarrollo JavaScript JQuery/Angular: Instituto IBEC.</p>
                    <p>-Tecnicatura en redes y software: UTU ESI Buceo.</p>
                    <p>-Bachillerato Tecnológico: UTU Brazo Oriental.</p>
                    <p>-Diseño Gráfico: BIOS.</p>
                </div>
                <div className="Perfilinfo-right">
                    <h2>Experiencias Laborales</h2>
                    <h4>TECNICO IT SOPORTE 1B -PROYECTO SAN MIGUEL S.A.- | SONDA S.A. | 2018-
                    ACTUALIDAD</h4>
                    <p>Resolución de tickets mediante HelpDesk de forma presencial y remota en San Miguel Uruguay-Argentina.
                    Administración de Servidores Windows Server 2008-2012: Active Directory, File Server, DNS, VMWARE, Consola Antivirus.
                    Configuración de equipamiento de redes: cableado estructurado, routers, Access Point, switch, telefonía IP.
                    Trabajos de Hardware siendo impresoras de etiquetas, scanner, equipos de escritorio, notebook, Lectores de código, videoconferencia.
                    Instalación de Software en general y sistemas independientes de San Miguel.</p>

                    <h4>TECNICO IT SOPORTE 1A -PROYECTO OSE- | SONDA S.A. | 2016-2018</h4>
                    <p>Resolución de tickets mediante HelpDesk de forma presencial y remota en las localidades de OSE dentro del territorio nacional.
                    Trabajos de Hardware siendo impresoras, scanner, plotters, equipos de escritorio, notebook, Colector móvil, videoconferencia CISCO.
                    Instalación de Software en general y sistemas independientes de OSE.</p>

                    <h4>TECNICO CEIBAL | SONDA S.A. | AÑO 2015-2016</h4>
                    <p>Reparación de equipos CEIBAL en todas sus versiones (Notebook, Tablets, etc). Trabajos de forma presencial en centros escolares, administrado de stock y entrega de equipos.</p>
                </div>
                <div className="Perfilinfo-center1">
                    <h2>Idiomas</h2>
                    <p><b>Cursando actualmente: </b>Inglés First Certificate. Anglo Centro.</p>
                </div>
                <div className="Perfilinfo-center2">
                    <h2>Tecnologías</h2>
                    <h4>PROGRAMACIÓN JAVASCRIPT JQUERY & ANGULARJS. INSTITUTO IBEC.</h4>
                    <p>Desarrollo e implementaciones de tecnologías estudiadas. Como proyecto de exoneración de curso se realizó un ‘Chatbot’.
                    Utilizando la combinación de JQuery, AngularJS, conocimientos previos de HTML, CSS y Frameworks como Bootstrap.
                        Sistema de control de versiones GIT</p>
                    <h4>PROGRAMACIÓN PHP, HTML, CSS, MYSQL. UTU-ESI BUCEO</h4>
                    <p>Desarrollo de sitios web escolares. Como proyecto final se realizó un diario/portal de noticias online utilizando las tecnologías estudiadas.
                        Implementado a nivel de Servidores Linux y Windows Server a nivel local. Sistema de control de versiones GIT.</p>
                    <h4>PROGRAMACIÓN JAVA Y MICROSOFT.NET. UTU-BRAZO ORIENTAL</h4>
                    <p>Estudio y desarrollo de tecnologías JAVA utilizando IDE Eclipse-Netbeans.
                    Proyecto Final utilizando tecnología .NET y MYSQL. Se realiza un proyecto de ‘Casa-Domotica’ a nivel cliente.</p>
                    <h4>PROGRAMACIÓN ANDROID STUDIO.</h4>
                    <p>Estudio a nivel básico y personal sobre la tecnología Android. Implementación e instalación de Apps.
                    Estudios realizados de forma online en página web Udemy y Universidad de Valencia.</p>
                    <Link to="/Inicio"><button type="submit">Atras</button></Link>
                </div>
            </div>

            <Switch>
                <Router path="/Inicio">
                    <Inicio />
                </Router>
            </Switch>
        </Route>
    )
}

export default Perfil;