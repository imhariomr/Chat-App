import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  return(
    <div>
      <Button color="primary" size="sm" label="test" icon={faUser} iconSize="lg"/>
      <Input type="text" size="sm" placeholder="Enter your name"/>
    </div>
  );
}
