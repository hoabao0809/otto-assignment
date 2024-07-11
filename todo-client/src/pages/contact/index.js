import { ContainerBox } from "../../components/styledComponents";
import ContactContainer from "../../features/contact";

export default function ContactPage() {
  return (
    <ContainerBox>
      <h1>Contacts</h1>
      <ContactContainer />
    </ContainerBox>
  );
}
