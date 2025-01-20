import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faReadme } from "@fortawesome/free-brands-svg-icons"
import { faAt } from "@fortawesome/free-solid-svg-icons"


export default function Footer()  {
  return (
    <>
      <div className=" saf2 flex flex-row justify-between mt-8">
        <div>
          <a href="mailto:aniket2contact@gmail.com">
            <FontAwesomeIcon icon={faAt}/>
          </a>
        </div>
        <div>
          <a href="https://github.com/nix-rs">
            <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
        <div>
          <a href="">
            <FontAwesomeIcon icon={faReadme} />
          </a>
        </div>

      </div>
    </>
  )
}
