import "./style.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from '@material-ui/icons/Facebook';
import { Button } from "@material-ui/core";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <h2>Connect to Me</h2>
        <Button variant="link" color="default" href="https://github.com/Soham2020" startIcon={<GitHubIcon />}></Button>
        <Button variant="link" color="default" href="https://www.linkedin.com/feed/" startIcon={<LinkedInIcon />}></Button>
        <Button variant="link" color="default" href="https://www.linkedin.com/feed/" startIcon={<FacebookIcon />}></Button>
      </div>
    </>
  );
}
