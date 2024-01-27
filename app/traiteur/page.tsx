export default function Page() {
  return (
    <div className='flex flex-col gap-8'>
      <div className="bg-white">
        <main className='flex flex-col gap-8 w-full md:w-[700px]'>
          <article>

            <h1 className='text-4xl font-bold mb-4'>Traiteur</h1>
            <p>Vous pouvez consulter <a className="text-blue-500 hover:underline" href="https://Isoko la Source.ecoleouestmtl.com/wp-content/uploads/2022/09/Infolettre-Sept2022.pdf">quelques informations</a> à propos du traiteur scolaire. Si vous souhaitez commander ou voir le menu, vous pouvez vous rendre au <a href="https://www.traiteurmerenda.com/accueil.html">https://www.traiteurmerenda.com/</a>.</p>
            <ul>
              <li><a className="text-blue-500 hover:underline" href="https://Isoko la Source.ecoleouestmtl.com/wp-content/uploads/2023/10/Infolettre_Merenda_octobre.pdf">Infolettre Merenda – Octobre 2023</a></li>
            </ul>

          </article>
        </main>
      </div>
    </div>
  )
}
