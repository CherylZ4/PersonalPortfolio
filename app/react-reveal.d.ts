// react-reveal.d.ts
declare module 'react-reveal/Fade' {
    import { ReactNode } from 'react';
  
    interface FadeProps {
      children: ReactNode;
      duration?: number;
      
    }
  
    const Fade: React.FC<FadeProps>;
  
    export default Fade;
  }
  
  