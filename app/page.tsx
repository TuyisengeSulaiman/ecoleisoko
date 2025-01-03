import Image from "next/image";
import Video from 'next-video';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import VisionCards from '@/components/vision-cards';
import { IdeaForm } from "@/components/idea-form";


export default function Home() {
  return (
<div className='flex flex-col gap-8 max-w-[700px]'>
      {/* Welcome Section */}
      <section className="space-y-6">
        <h2 className="text-left text-yellow-700 font-Montserrat font-semibold text-lg">
          <a href="http://Isoko la Source.ecoleouestmtl.com/mot-de-bienvenue/">
            Bienvenue à l'école internationale Isoko - La source
          </a>
        </h2>
        <div className="prose prose-sm">
          <p>
            L'École Isoko - La Source est un établissement éducatif dynamique et innovant, dédié à offrir une éducation de
            qualité, adaptée aux besoins de chaque élève. Située dans un environnement chaleureux et accueillant, notre
            école est un véritable lieu de découverte, d'apprentissage, et d'épanouissement personnel.
          </p>
        </div>
      </section>

      {/* Video section */}
      <div className='flow-root'>
        <div className='m-2 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
          <Video 
            src="/preview-video.mp4" 
            style={{ borderRadius: 12 }} 
            accentColor="#1D4ED8" 
            muted 
            autoPlay 
            loop 
          />
        </div>
      </div>

      <VisionCards />

      {/* Educational Framework Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-green-700">Un Cadre Pédagogique Riche</h2>
        <div className="prose prose-sm">
          <p>Nous proposons un programme éducatif complet, structuré autour de plusieurs axes :</p>
          <ul className="list-disc pl-6">
            <li>Apprentissage académique solide : Des cours rigoureux pour renforcer les bases.</li>
            <li>Activités créatives et sportives : Pour développer les talents artistiques et physiques.</li>
            <li>Projets communautaires : Impliquer les élèves dans des initiatives qui ont un impact réel sur leur environnement.</li>
          </ul>
        </div>
      </section>

      {/* School Operation Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-green-700">Le Fonctionnement de l'École</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-600">Les Cycles</h3>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2">
                <span className="font-bold">Maternelle:</span>
                <span>Développement des compétences sociales, émotionnelles et motrices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">Primaire:</span>
                <span>Acquisition des bases fondamentales</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">Secondaire:</span>
                <span>Approfondissement des matières académiques</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-600">Horaires</h3>
            <ul className="list-none space-y-2">
              <li>8h00 - 12h00: Cours théoriques</li>
              <li>12h00 - 13h30: Pause déjeuner</li>
              <li>13h30 - 16h00: Activités pratiques</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Health and Wellness Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-green-700">Plan Santé et Bien-être</h2>
        <div className="prose prose-sm">
          <p>
            À Isoko - La Source, nous reconnaissons que la santé et le bien-être des enfants sont essentiels pour leur
            réussite académique et personnelle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold">Nutrition et Activité Physique</h3>
              <ul className="list-disc pl-6">
                <li>Cantine équilibrée</li>
                <li>Collations saines</li>
                <li>Activités sportives régulières</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Santé Mentale</h3>
              <ul className="list-disc pl-6">
                <li>Le vivre ensemble</li>
                <li>Médiation bienveillante</li>
                <li>Espaces de détente</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Image gallery */}
      <div className='flex justify-between flex-wrap items-center gap-[15px] w-full md:w-[700px]'>
        {['/IMG_3381.jpg', '/IMG_2590.jpg'].map((src, index) => (
          <div key={index} className='w-[250px] rounded-full'>
            <AspectRatio ratio={9/9}>
              <Image 
                src={src} 
                alt='school' 
                fill 
                className='rounded-full border-solid border-[5px] border-green-500 object-contain' 
              />
            </AspectRatio>
          </div>
        ))}
      </div>

      {/* Mobile idea form */}
      <div className="block md:hidden bg-white rounded-lg sm:mx-auto sm:w-[400px] w-full">
        <div className="bg-blue-700 max-w-full rounded-sm px-4 py-2 text-white">
          <h1 className="text-xl font-bold">Boîte à idées</h1>
        </div>
        <IdeaForm />
      </div>
    </div>
  )
}
