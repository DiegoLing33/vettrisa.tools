import styled from "styled-components";
import {FlexBox} from "./FlexBox";
import {getPix} from "../utils/Utils";


export interface FlexBoxSpacingProps {
	gap?: number | string;
}

/**
 * Flex box spacing
 */
export const FlexBoxSpacing = styled(FlexBox)<FlexBoxSpacingProps>`
  flex-wrap: wrap;
  margin: ${p => p.gap ? `-${getPix(p.gap)} 0 0 -${getPix(p.gap)}` : null};

  ${FlexBox} {
    margin: ${p => p.gap ? `${getPix(p.gap)} 0 0 ${getPix(p.gap)}` : null};
  }

  width: ${p => p.gap ? `calc(${p.width ?? '100%'} + ${getPix(p.gap)})` : null};
`;