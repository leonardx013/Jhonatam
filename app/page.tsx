import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  Instagram,
  Star,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Clock,
  Award,
  Phone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedCounter } from "@/components/animated-counter"
import { TestimonialCarousel } from "@/components/testimonial-carousel"

export default function LovableProWebsite() {
  const whatsappMessages = {
    header:
      "https://api.whatsapp.com/send?phone=5513991995463&text=Ol%C3%A1%2C%20Jhonatan!%20Cliquei%20no%20bot%C3%A3o%20do%20cabe%C3%A7alho%20e%20quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os.",
    painPoints:
      "https://api.whatsapp.com/send?phone=5513991995463&text=Ol%C3%A1%2C%20Jhonatan!%20Estou%20cansado%20de%20ter%20vendas%20paradas%20e%20quero%20resolver%20isso%20agora!",
    aboutConsultation:
      "https://api.whatsapp.com/send?phone=5513991995463&text=Ol%C3%A1%2C%20Jhonatan!%20Quero%20agendar%20uma%20consultoria%20gratuita%20para%20transformar%20meu%20WhatsApp!",
    aboutInstagram:
      "https://api.whatsapp.com/send?phone=5513991995463&text=Ol%C3%A1%2C%20Jhonatan!%20Vim%20do%20seu%20site%20e%20quero%20ver%20mais%20resultados%20no%20Instagram!",
    whatsappService:
      "https://api.whatsapp.com/send?phone=5513991995463&text=Ol%C3%A1%2C%20Jhonatan!%20Quero%20turbinar%20meu%20WhatsApp%20Business%20e%20transformar%20em%20m%C3%A1quina%20de%20vendas!",
    marketingService:
      "https://api.whatsapp.com/send?phone=5513991995463&text=Ol%C3%A1%2C%20Jhonatan!%20Preciso%20atrair%20mais%20clientes%20qualificados%20com%20marketing%20digital!",
    mentoringService:
      "https://api.whatsapp.com/send?phone=5513991995463&text=Ol%C3%A1%2C%20Jhonatan!%20Quero%20uma%20mentoria%20personalizada%20para%20meu%20neg%C3%B3cio%20decolar!",
    freeConsultation:
      "https://api.whatsapp.com/send?phone=5513991995463&text=Ol%C3%A1%2C%20Jhonatan!%20Quero%20agendar%20minha%20consultoria%20gratuita%20agora%20mesmo!",
    offer990:
      "https://api.whatsapp.com/send?phone=5513991995463&text=Ol%C3%A1%2C%20Jhonatan!%20Quero%20o%20Arsenal%20de%20Sobreviv%C3%AAncia%20WhatsApp%20por%20R%24%209%2C90!",
    offer749:
      "https://api.whatsapp.com/send?phone=5513991995463&text=Ol%C3%A1%2C%20Jhonatan!%20Quero%20garantir%20minha%20vaga%20no%20M%C3%A9todo%20Sobreviv%C3%AAncia%20Imediata%20por%20R%24%20749!",
    doubts:
      "https://api.whatsapp.com/send?phone=5513991995463&text=Ol%C3%A1%2C%20Jhonatan!%20Tenho%20algumas%20d%C3%BAvidas%20sobre%20seus%20servi%C3%A7os%20e%20gostaria%20de%20conversar.",
    transformation:
      "https://api.whatsapp.com/send?phone=5513991995463&text=Ol%C3%A1%2C%20Jhonatan!%20Quero%20come%C3%A7ar%20minha%20transforma%C3%A7%C3%A3o%20e%20multiplicar%20minhas%20vendas!",
    successCase:
      "https://api.whatsapp.com/send?phone=5513991995463&text=Ol%C3%A1%2C%20Jhonatan!%20Quero%20ser%20seu%20pr%C3%B3ximo%20caso%20de%20sucesso!",
    faqDoubts:
      "https://api.whatsapp.com/send?phone=5513991995463&text=Ol%C3%A1%2C%20Jhonatan!%20Li%20o%20FAQ%20mas%20ainda%20tenho%20d%C3%BAvidas%20espec%C3%ADficas.",
    finalCta:
      "https://api.whatsapp.com/send?phone=5513991995463&text=Ol%C3%A1%2C%20Jhonatan!%20N%C3%A3o%20quero%20mais%20vendas%20paradas!%20QUERO%20TRANSFORMAR%20AGORA!",
  }
  const instagramLink = "https://www.instagram.com/013jhonatan/"

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="font-bold text-2xl text-gray-900">Jhonatan Willians</div>
            <Badge className="ml-3 bg-green-100 text-green-800 text-xs">
              <Award className="w-3 h-3 mr-1" />
              Especialista Certificado
            </Badge>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#sobre" className="text-gray-600 hover:text-gray-900 transition-colors">
              Sobre
            </Link>
            <Link href="#servicos" className="text-gray-600 hover:text-gray-900 transition-colors">
              Serviços
            </Link>
            <Link href="#depoimentos" className="text-gray-600 hover:text-gray-900 transition-colors">
              Depoimentos
            </Link>
            <Link href="#ofertas" className="text-gray-600 hover:text-gray-900 transition-colors">
              Ofertas
            </Link>
          </nav>
          <Button asChild className="bg-green-600 hover:bg-green-700 shadow-lg">
            <Link href={whatsappMessages.header} target="_blank">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-20">
        <div className="absolute inset-0 bg-transparent" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2">
            🚨 A HORA DE ALAVANCAR SEU NEGÓCIO É AGORA!!!
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Suas Vendas Estão
            <span className="text-yellow-400 block"> PARADAS </span>
            <span className="text-white">também?</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Fica Tranquilo... Você <strong className="text-yellow-400">NÃO</strong> Tá Sozinho Nessa!
          </p>

          {/* Social Proof Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              +33 NEGÓCIOS SALVOS PELO BRASIL
            </Badge>
            <Badge className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 text-sm">
              <Star className="w-4 h-4 mr-2" />
              98% DE RECORRÊNCIA DE CLIENTES
            </Badge>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-50">Você está cansado de...</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-white">
                <span className="text-2xl">😤</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Clientes que "somem" no meio da conversa?</h3>
              <p className="text-white">Você investe tempo explicando, mas eles desaparecem sem comprar</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-white">
                <span className="text-2xl">💸</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Vendas que não saem do papel?</h3>
              <p className="text-white">Muitas conversas, poucos fechamentos, faturamento baixo</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-white">
                <span className="text-2xl">😰</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Não saber o que falar para vender?</h3>
              <p className="text-white">Falta de scripts e estratégias que realmente convertem</p>
            </div>
          </div>
          <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
            <Link href={whatsappMessages.painPoints} target="_blank">
              <MessageCircle className="w-5 h-5 mr-2" />
              Quero Resolver Isso Agora!
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Quem é Jhonatan Willians?</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              O Especialista que vai <span className="text-white">Transformar</span> seu WhatsApp
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-8 text-white">
                Jhonatan Willians não é só mais um nome no marketing digital. Ele é o típico caso de quem começou com
                zero, sem curso de R$10 mil, sem mentoria gringa, sem agência de glamour... só com uma coisa nas costas:
                <strong className="text-green-600"> Fome e um senso de urgência de vencer!</strong>
              </p>

              {/* Animated Counters */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <div className="text-gray-600 font-medium">Clientes Transformados</div>
                  <div className="text-sm text-gray-500 mt-1">Negócios que saíram do zero</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    <AnimatedCounter end={300} suffix="%" />
                  </div>
                  <div className="text-gray-600 font-medium">Aumento Médio em Vendas</div>
                  <div className="text-sm text-gray-500 mt-1">Resultado comprovado</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="hover:bg-green-700">
                  <Link href={whatsappMessages.aboutConsultation} target="_blank">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Agendar Consultoria Gratuita
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={instagramLink} target="_blank">
                    <Instagram className="w-4 h-4 mr-2" />
                    Ver Resultados no Instagram
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagem%201.jpg-OXrGKGXYnAyi3aJHWtVxK7NnNEyNwi.jpeg"
                alt="Jhonatan Willians - Especialista em WhatsApp Business"
                width={400}
                height={500}
                className="object-cover hover:scale-105 transition-transform duration-300 shadow-lg rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">Meus Serviços</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Como vou <span className="text-green-600">Multiplicar</span> suas Vendas
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-white">
              Estratégias testadas e aprovadas que já transformaram mais de 500 negócios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200">
              <CardContent className="p-0">
                <div className="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <MessageCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">WhatsApp Business Turbinado</h3>
                <p className="mb-6 text-center">
                  Transforme seu WhatsApp em uma <strong className="">máquina de vendas automática</strong>
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="">
                      <strong>Scripts prontos</strong> que convertem 3x mais
                    </span>
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="">
                      <strong>Automações inteligentes</strong> que trabalham por você
                    </span>
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="">
                      <strong>Funil de vendas</strong> que nunca para de vender
                    </span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                  <Link href={whatsappMessages.whatsappService} target="_blank">
                    Quero Turbinar Meu WhatsApp
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <CardContent className="p-0">
                <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Marketing Digital Certeiro</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Estratégias que <strong>atraem clientes qualificados</strong> direto para seu WhatsApp
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Campanhas que convertem</strong> sem queimar dinheiro
                    </span>
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Conteúdo magnético</strong> que atrai seu cliente ideal
                    </span>
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>ROI garantido</strong> em cada real investido
                    </span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href={whatsappMessages.marketingService} target="_blank">
                    Quero Atrair Mais Clientes
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
              <CardContent className="p-0">
                <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Target className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Mentoria Mão na Massa</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Acompanhamento <strong>individual e personalizado</strong> até você decolar
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Sessões 1:1</strong> focadas no seu negócio
                    </span>
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Suporte direto</strong> via WhatsApp
                    </span>
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Resultados em 30 dias</strong> ou seu dinheiro de volta
                    </span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href={whatsappMessages.mentoringService} target="_blank">
                    Quero Mentoria Personalizada
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
              <Link href={whatsappMessages.freeConsultation} target="_blank">
                <Phone className="w-5 h-5 mr-2" />
                Agendar Consultoria Gratuita Agora!
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impacto Rápido Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-green-600 border-0">
              Impacto RÁPIDO Mesmo com Pouco Orçamento!
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center text-center tracking-normal leading-7 m-auto p-0 shadow-2xl rounded-3xl">
              <div className="space-y-8">
                {/* Green Box */}
                <div className="bg-green-600 text-white p-8 rounded-2xl py-8 my-0 mx-0 border-0">
                  <h3 className="text-2xl font-bold mb-6">FAZ ESSA CONTA COMIGO:</h3>
                  <p className="text-lg leading-relaxed">
                    Se você investir <span className="text-yellow-300 font-bold text-xl">R$15 por dia</span>, durante 30
                    dias, com a configuração que eu vou fazer...
                  </p>
                  <p className="text-lg leading-relaxed mt-4">
                    dá pra mostrar sua loja para mais de{" "}
                    <span className="text-yellow-300 font-bold text-2xl">15 MIL pessoas</span> da sua cidade ou região!
                  </p>
                </div>

                {/* Description Text */}
                <div className="text-gray-800">
                  <p className="text-lg leading-relaxed font-medium text-white">
                    Imagine isso acontecendo com mais de 20 anúncios falando sobre seus produtos, seus serviços, suas
                    promoções... e um botão para te chamar <strong>DIRETO</strong> no WhatsApp?
                  </p>
                </div>

                {/* Yellow Box */}
                <div className="text-black p-8 rounded-2xl bg-yellow-600">
                  <p className="text-xl font-bold text-center leading-relaxed text-green-50">
                    É isso que vai acontecer, e você <strong>NÃO</strong> vai fazer isso sozinha. <strong>EU</strong>{" "}
                    vou te acompanhar!
                  </p>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="flex justify-center">
                
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
              <Link href={whatsappMessages.transformation} target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                Quero Começar Agora Mesmo!
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section id="ofertas" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-600 text-white">🔥 OFERTAS LIMITADAS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Escolha Sua <span className="text-yellow-400">Transformação</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Apenas 10 vagas disponíveis este mês. Não perca essa oportunidade!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Offer 1 */}
            <Card className="p-8 bg-gradient-to-br from-green-600 to-green-700 text-white border-0 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-yellow-500 text-black font-bold">MAIS VENDIDO</Badge>
              </div>
              <CardContent className="p-0">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Arsenal de Sobrevivência WhatsApp</h3>
                  <p className="text-green-100 mb-4">Scripts prontos para usar hoje mesmo</p>
                  <div className="flex items-baseline mb-4">
                    <span className="text-sm line-through text-green-200 mr-2">R$ 97,00</span>
                    <span className="text-4xl font-bold">R$ 9,90</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-200" />
                    <span>50+ Scripts de Vendas Testados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-200" />
                    <span>Respostas para Objeções Mais Comuns</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-200" />
                    <span>Templates de Follow-up</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-200" />
                    <span>Bônus: Checklist de Otimização</span>
                  </li>
                </ul>

                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold" asChild>
                  <Link href={whatsappMessages.offer990} target="_blank">
                    <Zap className="w-5 h-5 mr-2" />
                    QUERO POR R$ 9,90
                  </Link>
                </Button>

                <p className="text-center text-green-100 text-sm mt-4">⏰ Oferta válida apenas hoje!</p>
              </CardContent>
            </Card>

            {/* Offer 2 */}
            <Card className="p-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white border-0 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-red-500 text-white font-bold">RESULTADO GARANTIDO</Badge>
              </div>
              <CardContent className="p-0">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Método Sobrevivência Imediata</h3>
                  <p className="text-blue-100 mb-4">Consultoria completa + implementação</p>
                  <div className="flex items-baseline mb-4">
                    <span className="text-sm line-through text-blue-200 mr-2">R$ 1.497,00</span>
                    <span className="text-4xl font-bold">R$ 749,00</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-blue-200" />
                    <span>Consultoria 1:1 (2 horas)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-blue-200" />
                    <span>Implementação Completa do Sistema</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-blue-200" />
                    <span>30 Dias de Suporte Direto</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-blue-200" />
                    <span>Garantia de Resultado ou Dinheiro de Volta</span>
                  </li>
                </ul>

                <Button size="lg" className="w-full bg-white hover:bg-gray-100 text-purple-700 font-bold" asChild>
                  <Link href={whatsappMessages.offer749} target="_blank">
                    <Shield className="w-5 h-5 mr-2" />
                    QUERO GARANTIR MINHA VAGA
                  </Link>
                </Button>

                <p className="text-center text-blue-100 text-sm mt-4">{"Só EU e VOCÊ\n🎯 Apenas 3 vagas restantes!"}</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">Ainda tem dúvidas? Fale comigo no WhatsApp!</p>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 bg-transparent"
              asChild
            >
              <Link href={whatsappMessages.doubts} target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                Tirar Dúvidas no WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Metodologia Comprovada</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Como Funciona Minha <span className="text-green-600">Metodologia</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              O mesmo processo que já transformou mais de 500 negócios
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg bg-green-300">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Diagnóstico Completo</h3>
              <p className="text-gray-600">
                Identifico exatamente onde seu negócio está perdendo vendas e ajudo você a virar referência no seu nicho
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg bg-green-400">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Estratégia Personalizada</h3>
              <p className="text-gray-600">Crio um plano específico para seu segmento e público</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg bg-green-500">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Implementação Rápida</h3>
              <p className="text-gray-600">Colocamos tudo em funcionamento em até 72 horas</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Resultados Garantidos</h3>
              <p className="text-gray-600">Acompanho até você ver o aumento nas suas vendas</p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
              <Link href={whatsappMessages.transformation} target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                Quero Começar Minha Transformação!
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800">Depoimentos Reais</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              O que meus clientes <span className="text-green-600">Conquistaram</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-white">
              Resultados reais de pessoas que saíram do zero e transformaram seus negócios
            </p>
          </div>

          <TestimonialCarousel />

          <div className="text-center mt-12">
            <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
              <Link href={whatsappMessages.successCase} target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                Quero Ser o Próximo Caso de Sucesso!
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Dúvidas Frequentes</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Perguntas que Sempre Recebo</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold mb-2">Funciona para qualquer tipo de negócio?</h3>
                <p className="text-gray-600">
                  Sim! Minhas estratégias são adaptáveis para diversos segmentos: e-commerce, serviços, restaurantes,
                  consultoria, produtos físicos e digitais. Se você vende pelo WhatsApp ou quer rechonecimento da sua
                  marca/loja, vai funcionar.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold mb-2">Quanto tempo leva para ver resultados?</h3>
                <p className="text-gray-600">
                  A maioria dos meus clientes começam a ver resultados na PRIMEIRA SEMANA. Resultados mais
                  significativos geralmente aparecem em 30 dias. Mas já tive clientes que dobraram as vendas já na
                  primeira semana!
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold mb-2">Preciso ter conhecimento técnico?</h3>
                <p className="text-gray-600">
                  Não! Tudo é feito de forma simples e prática. Eu te ensino passo a passo, sem complicações. Se você
                  sabe usar WhatsApp, consegue implementar minhas estratégias.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold mb-2">Tem garantia?</h3>
                <p className="text-gray-600">
                  Sim! Na consultoria completa, ofereço 30 dias de garantia. Se você não ver resultados seguindo
                  exatamente o que ensino, devolvemos 100% do seu investimento.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="mb-4 text-white">Ainda tem dúvidas? Fale comigo diretamente!</p>
            <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
              <Link href={whatsappMessages.faqDoubts} target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                Tirar Minhas Dúvidas no WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Não Deixe Suas Vendas <span className="text-yellow-300">PARADAS</span> Por Mais Tempo!
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Enquanto você pensa, seus concorrentes estão vendendo.
            <strong> Não perca mais tempo!</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              asChild
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-4"
            >
              <Link href={whatsappMessages.finalCta} target="_blank">
                <Zap className="w-5 h-5 mr-2" />
                QUERO TRANSFORMAR AGORA!
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-green-600 text-lg px-8 py-4 bg-transparent"
              asChild
            >
              <Link href="#ofertas">
                <Star className="w-5 h-5 mr-2" />
                Ver Ofertas Especiais
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center text-green-100">
            <Clock className="w-5 h-5 mr-2" />
            <span className="font-medium">7 VAGAS PREENCHIDAS⏰ Apenas 3 vagas disponíveis este mês!</span>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  )
}
