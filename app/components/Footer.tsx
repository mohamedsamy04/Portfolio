import { Linkedin, GitlabIcon as GitHub, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="mb-2">Phone: 01000342166</p>
            <p className="mb-2">Email: mohamedsamy25411@gmail.com</p>
            <p>Location: Baltim, Kafr El Sheikh, Egypt</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <p className="mb-4">Follow me on social media for updates and tech insights.</p>
            <div className="flex space-x-4">
              <a href="http://www.linkedin.com/in/mo72medsamy" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/mohamedsamy04" className="hover:text-blue-400 transition-colors">
                <GitHub className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/mo72med_samy/profilecard/?igsh=cXQwZThnam50N2dz" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/share/19oJ1ucsB8/?mibextid=wwXIfr" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Mohamed Samy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
