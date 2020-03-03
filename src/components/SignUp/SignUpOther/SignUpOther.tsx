import React from 'react';
import LayoutWrapper from '@styles/layout';
import AuthFacebook from '@components/Shared/AuthFacebook';

const SignUpOther = () => {
  return (
    <section>
      <LayoutWrapper>
        <div>
          <AuthFacebook />
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default SignUpOther;
