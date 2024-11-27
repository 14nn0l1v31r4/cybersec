import React from 'react'
import Qrcodepc from './Qrcodepc'
import Qrcodesmart from './Qrcodesmart'
import Help from './Help'
import Form from './Form'
import Footer from './Footer'

const Body = () => {
  return (
    <div className=" bg-gradient-to-r from-green-900 via-green-950 to-black w-full min-h-screen overflow-hidden">
        <div className='text-center font-serif font-extrabold text-4xl md:text-6xl pt-16 md:p-4'>
            Noob Security
            
        </div>
        <div className="border rounded-md md:m-6 text-start md:text-lg md:p-3 shadow-md ">
          
        Jogos vêm sendo utilizados não somente para entretenimento, mas também aprendizado, como
        os jogos educacionais. Estes jogos têm como finalidade mediar a aprendizagem, construir
        conhecimento e estimular habilidades cognitivas, afetivas e motoras (SANTOS, 2020). Os jogos
        educacionais podem ser eletrônicos ou analógicos, mas ambos desenvolvem o hábito de desafiar os
        jogadores, para que eles se mantenham motivados a continuar, utilizando para isso, recursos como
        pontuação, níveis e recompensas, o que supre anecessidade dos seres.
        humanos por conquistar ou cumprir objetivos (VIANNA, 2013).O presente projeto intitulado, “Jogando e
        Aprendendo&quot;, tem como objetivo proporcionar um ambiente interativo voltado para o uso de jogos
        educacionais. <br/> O jogo a ser apresentado chama-se Noob Security, um jogo de RPG (Role-Playing Game)
        digital que utiliza elementos de jogo, desenvolvidos por alunos do curso de
        Bacharelado em Sistemas de Informação. Com o objetivo de apoiar a
        aprendizagem dos assuntos de segurança da informação, foi desenvolvido para ajudar os alunos
        de graduação da área de tecnologia da informação a aprenderem e exercitarem os conteúdos abordados em sala de aula de uma
        forma mais dinâmica, atraente e divertida (RANGEL e ROCHA, 2022).
        O Noob Security foi desenvolvido após ser identificada uma escassez de jogos digitais de
        caráter educativo para a área de segurança da informação, voltados para alunos de graduação e
        que abordem temas diversos nessa área. Com as avaliações realizadas até aqui, o jogo se
        mostrou uma ferramenta com potencial para contribuir com o processo de aprendizagem dos
        assuntos propostos. <br/>O <a href="https://beinternetawesome.withgoogle.com/pt-br_br/interland/" className='underline'>Interland</a> foi desenvolvido pela Google como
        parte da iniciativa <span className="font-semibold">Be Internet Awesome</span>, após a identificação de uma necessidade crescente de
        recursos educativos para ensinar crianças sobre segurança digital e cidadania online. Focado em
        temas como privacidade, segurança online, respeito digital e a prevenção de comportamentos
        prejudiciais, o jogo oferece uma abordagem interativa e envolvente para ensinar os conceitos
        fundamentais de navegação segura na internet. Com base nas avaliações realizadas, o Interland
        demonstrou ser uma ferramenta eficaz para o aprendizado desses temas, utilizando uma
        dinâmica de jogo divertida e educativa para engajar crianças e promover um ambiente digital
        mais seguro e consciente.

        </div>

        <div className='font-mono text-lg mt-10 ml-60'>
              Links para Download</div>
        
        <div className='flex flex-col md:flex-row justify-center items-center gap-8 mt-5'>
        <Qrcodepc />

        <Qrcodesmart />
        </div>
        <div >
          <Help/>
        </div>
        <div className='mb-1'>
          <Form />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default Body