import {
  Html,
  Body,
  Container,
  Heading,
  Text,
} from "@react-email/components";

export type EmailTemplateProps = Readonly<{
  firstName: string;
  secondName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}>;

export function EmailTemplate({
  firstName,
  secondName,
  email,
  phone,
  service,
  message,
} :EmailTemplateProps) {
  return (
    <Html>
      <Body>
        <Container>
          <Heading>New Contact Form Submission</Heading>

          <Text>
            Name: {firstName} {secondName}
          </Text>

          <Text>Email: {email}</Text>

          {phone && <Text>Phone: {phone}</Text>}

          <Text>Service: {service}</Text>

          <Text>Message: {message}</Text>
        </Container>
      </Body>
    </Html>
  );
}