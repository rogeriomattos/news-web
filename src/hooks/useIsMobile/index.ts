import { useContext, useEffect, useState } from 'react';
import { useWindowWidth } from '@hooks/useWindowWidth';
import { ThemeContext } from 'styled-components';


export const useIsMobile = () => {
  const theme = useContext(ThemeContext);
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const test = typeof windowWidth === 'number' && theme && windowWidth <= theme.breakPoints.mobile;
    if(test !== undefined && test !== isMobile)
      setIsMobile(test);
    
  }, [windowWidth, theme]);
  
  return isMobile;
}