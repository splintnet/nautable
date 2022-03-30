export default function Guides() {
  return (
    <div className="py-8">
      <div className="container max-w-screen-xl mx-auto px-4 2xl:px-0 flex flex-col space-y-4 lg:space-y-8">
        <header className="w-full"><h2 className="text-xl font-semibold text-zz-blue-500 lg:text-2xl">Sailing Guides</h2>
        </header>
        <ul data-testid="recommendations-wrapper"
            className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
          <li><a target="_blank" href="https://www.zizoo.com/en/m/sailing-guide/sailing-in-croatia/"
                 data-testid="recommendations-0" id="recommendations-0" className="text-sm text-zz-blue-500"
                 rel="noreferrer">Sailing In Croatia</a></li>
          <li><a target="_blank" href="https://www.zizoo.com/en/m/sailing-guide/sailing-in-spain/"
                 data-testid="recommendations-1" id="recommendations-1" className="text-sm text-zz-blue-500"
                 rel="noreferrer">Sailing In Spain</a></li>
          <li><a target="_blank" href="https://www.zizoo.com/en/m/sailing-guide/sailing-in-greece/"
                 data-testid="recommendations-2" id="recommendations-2" className="text-sm text-zz-blue-500"
                 rel="noreferrer">Sailing In Greece</a></li>
          <li><a target="_blank" href="https://www.zizoo.com/en/m/sailing-guide/sailing-in-italy/"
                 data-testid="recommendations-3" id="recommendations-3" className="text-sm text-zz-blue-500"
                 rel="noreferrer">Sailing In Italy</a></li>
          <li><a target="_blank" href="https://www.zizoo.com/en/m/sailing-guide/sailing-in-france/"
                 data-testid="recommendations-4" id="recommendations-4" className="text-sm text-zz-blue-500"
                 rel="noreferrer">Sailing In France</a></li>
          <li><a target="_blank" href="https://www.zizoo.com/en/m/sailing-guide/sailing-in-turkey/"
                 data-testid="recommendations-5" id="recommendations-5" className="text-sm text-zz-blue-500"
                 rel="noreferrer">Sailing In Turkey</a></li>
          <li><a target="_blank" href="https://www.zizoo.com/en/m/sailing-guide/sailing-in-portugal/"
                 data-testid="recommendations-6" id="recommendations-6" className="text-sm text-zz-blue-500"
                 rel="noreferrer">Sailing In Portugal</a></li>
          <li><a target="_blank" href="https://www.zizoo.com/en/m/sailing-guide/sailing-in-the-netherlands/"
                 data-testid="recommendations-7" id="recommendations-7" className="text-sm text-zz-blue-500"
                 rel="noreferrer">Sailing In The Netherlands</a></li>
          <li><a target="_blank" href="https://www.zizoo.com/en/m/sailing-guide/sailing-in-sweden/"
                 data-testid="recommendations-8" id="recommendations-8" className="text-sm text-zz-blue-500"
                 rel="noreferrer">Sailing In Sweden</a></li>
        </ul>
      </div>
    </div>
  )
}
