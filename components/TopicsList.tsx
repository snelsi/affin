import * as React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { FiX } from "react-icons/fi";
import { Wrap, WrapItem, Tag } from "@chakra-ui/react";

const StyledList = styled(Wrap)`
  &[data-no-wrap="true"] {
    & ul {
      overflow: auto;
      flex-wrap: nowrap;
    }
  }
  & li {
    max-width: 95%;
  }
`;
const StyledTag = styled(Tag)`
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  padding: 8px 12px;
  transition: all var(--transition-ease);

  & > span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &::first-letter {
      text-transform: uppercase;
    }
  }

  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
`;

const renderTag = (topic: string) => (
  <WrapItem key={topic}>
    <Link href={`/search?topics=${topic}`} passHref>
      <StyledTag as="a" target="_blank" title={topic} className="chakra-tag">
        <span>{topic}</span>
      </StyledTag>
    </Link>
  </WrapItem>
);

interface TopicsProps {
  topics: string[];
  spacing?: string | number;
  maxTags?: number;
  trimExtra?: boolean;
}
const Topics: React.FC<TopicsProps> = ({
  topics,
  maxTags = 10,
  spacing = "12px",
  trimExtra = true,
  ...props
}) => {
  const [showMore, setShowMore] = React.useState(false);

  if (!topics || topics.length === 0) return null;

  const [topicsToShow, extraTopics] = React.useMemo(() => {
    const data = [...new Set(topics?.filter(Boolean) || [])];
    if (!trimExtra) return [data, []];

    const topicsToShow = data.slice(0, maxTags);
    const extraTopics = data.slice(maxTags);

    return [topicsToShow, extraTopics];
  }, [topics, maxTags, trimExtra]);

  const showMoreTopics = () => setShowMore(true);
  const hideExtraTopics = () => setShowMore(false);

  return (
    <StyledList spacing={spacing} {...props}>
      {topicsToShow.map(renderTag)}
      {extraTopics.length > 0 && (
        <>
          {showMore && extraTopics.map(renderTag)}

          <WrapItem>
            {showMore ? (
              <StyledTag
                as="button"
                type="button"
                onClick={hideExtraTopics}
                aria-label="Hide extra topics"
                className="chakra-tag"
              >
                <FiX />
              </StyledTag>
            ) : (
              <StyledTag
                as="button"
                type="button"
                onClick={showMoreTopics}
                aria-label="Show more topics"
                className="chakra-tag"
              >
                {`+${extraTopics.length}`}
              </StyledTag>
            )}
          </WrapItem>
        </>
      )}
    </StyledList>
  );
};

export default Topics;
