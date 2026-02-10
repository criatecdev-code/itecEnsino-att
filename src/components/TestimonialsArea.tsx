import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsArea: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        dotsClass: "slick-dots slick-thumb !bottom-[-50px] [&>li]:mx-1"
    };

    const testimonials = [
        {
            image: '/img/home/sara.png',
            desc: "Meu interesse pela área da saúde vai além da arte do cuidar. O Itec, por si só, já carrega um grande nome, um verdadeiro 'coração de mãe'. O técnico é a base, e apenas um trampolim para maiores sonhos.",
            author: "Sara",
            role: "Aluna de Enfermagem"
        },
        {
            image: '/img/home/bruno.png',
            desc: "Escola super flexível para os alunos. Onde te escutam e te ajudam... desde a secretaria até a sala de aula. Eu amo o curso que faço, estou cada dia mais apaixonado na profissão.",
            author: "Bruno Arruda",
            role: "Aluno Técnico"
        },
        {
            image: '/img/home/geisiane.png',
            desc: "Passei por um momento onde precisei de séria cirurgia, e tive um grande acolhimento. Nesta Instituição conheci professores que sempre nos ensinam a sermos excelentes profissionais.",
            author: "Geisiane Belmiro",
            role: "Aluna Formada"
        }
    ];

    return (
        <div className="section-padding bg-gradient-to-b from-white to-blue-50 relative">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">Depoimentos</span>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-800">
                        O que dizem <span className="text-secondary">Nossos Alunos</span>
                    </h3>
                </div>

                <div className="max-w-5xl mx-auto">
                    <Slider {...settings}>
                        {testimonials.map((item, index) => (
                            <div key={index} className="outline-none px-4 py-8">
                                <div className="bg-white p-10 md:p-14 rounded-[2rem] shadow-2xl shadow-blue-900/10 border border-white text-center relative mx-auto max-w-3xl transform transition-transform hover:scale-[1.01]">

                                    {/* Large Quote Mark */}
                                    <div className="text-9xl text-gray-100 absolute top-0 left-10 font-serif leading-none select-none z-0">
                                        &ldquo;
                                    </div>

                                    <div className="relative z-10">
                                        <div className="mb-8">
                                            <div className="w-28 h-28 rounded-full mx-auto p-1 bg-gradient-to-br from-primary to-secondary shadow-lg">
                                                <img src={item.image} alt={item.author} className="w-full h-full rounded-full object-cover border-4 border-white" loading="lazy" />
                                            </div>
                                        </div>

                                        <p className="text-gray-600 text-xl md:text-2xl italic leading-relaxed mb-8 font-light">
                                            "{item.desc}"
                                        </p>

                                        <div>
                                            <h4 className="text-2xl font-bold text-primary">{item.author}</h4>
                                            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mt-1">{item.role}</p>
                                            <div className="flex justify-center mt-4 text-yellow-400 text-lg space-x-1">
                                                <i className="fas fa-star shadow-sm"></i>
                                                <i className="fas fa-star shadow-sm"></i>
                                                <i className="fas fa-star shadow-sm"></i>
                                                <i className="fas fa-star shadow-sm"></i>
                                                <i className="fas fa-star shadow-sm"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsArea;
