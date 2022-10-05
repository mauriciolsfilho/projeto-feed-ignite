import { ContentProps } from "../../core/types/app";

interface DisplayContentProps {
  data: ContentProps[];
}

/**
 * Apresenta os dados de conteúdo com as formatações
 * @param data
 * @returns
 */
export function DisplayContent({ data }: DisplayContentProps) {
  return (
    <>
      {data?.map(({ content, type, href }: ContentProps, index: number) => {
        switch (type) {
          case "link":
            return (
              <p key={index}>
                <a href={href}>{content}</a>
              </p>
            );
          case "paragraph":
            return <p key={index}>{content}</p>;
          default:
            return <p key={index}>{content}</p>;
        }
      })}
    </>
  );
}
