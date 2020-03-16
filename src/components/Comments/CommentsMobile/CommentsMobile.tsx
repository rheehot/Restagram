import React from 'react';
import LayoutWrapper from '@styles/layout';
import profile from '@images/profile.jpg';

const CommentsMobile = () => {
  return (
    <section>
      <LayoutWrapper>
        <div>
          <div>
            <img src={profile} alt="" />
            <div>
              <div>
                <h2>baeharam</h2>
                <span>너무 예뻐용</span>
              </div>
              <div>
                <span>2일</span>
                <span>답글달기</span>
              </div>
              <div>
                <span>----</span>
                <span>답글보기(3개)</span>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
