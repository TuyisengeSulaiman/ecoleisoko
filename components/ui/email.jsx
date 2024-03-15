import { Html } from '@react-email/html';
import { Hr, Tailwind } from "@react-email/components";
import { Heading } from '@react-email/heading';
import { Text } from "@react-email/components";

export function EmailComp(props) {
  const { idea,name,email } = props;

  return (
    <Tailwind
    config={{
      theme: {
        extend: {
          colors: {
            brand: "#007291",
          },
        },
      },
    }}
    >
    <Html lang="en">
      <Heading as='h1'>Idée de {name}</Heading>
      <Text className='text-[#1D4ED8]'>Email: &lt;{email}&gt;</Text>
      <Hr />
      <Heading as='h2'>{idea}</Heading>
    </Html>
    </Tailwind>
  );
}
