import ArtisansKeyCapRow from '../components/ArtisansKeyCapRow';

const ArtisansKeyCap = () => {
  return (
    <section className='page-switches'>
      <div className='side behind'>
        <ArtisansKeyCapRow limit={[41, 60]}></ArtisansKeyCapRow>
        <ArtisansKeyCapRow limit={[1, 20]}></ArtisansKeyCapRow>
        <ArtisansKeyCapRow limit={[81, 100]}></ArtisansKeyCapRow>
        <ArtisansKeyCapRow limit={[21, 40]}></ArtisansKeyCapRow>
        <ArtisansKeyCapRow limit={[61, 80]}></ArtisansKeyCapRow>
      </div>
      <div className='side left'>
        <ArtisansKeyCapRow limit={[81, 100]}></ArtisansKeyCapRow>
        <ArtisansKeyCapRow limit={[41, 60]}></ArtisansKeyCapRow>
        <ArtisansKeyCapRow limit={[61, 80]}></ArtisansKeyCapRow>
        <ArtisansKeyCapRow limit={[1, 20]}></ArtisansKeyCapRow>
        <ArtisansKeyCapRow limit={[21, 40]}></ArtisansKeyCapRow>
      </div>
      <div className='side right'>
        <ArtisansKeyCapRow limit={[61, 80]}></ArtisansKeyCapRow>
        <ArtisansKeyCapRow limit={[21, 40]}></ArtisansKeyCapRow>
        <ArtisansKeyCapRow limit={[1, 20]}></ArtisansKeyCapRow>
        <ArtisansKeyCapRow limit={[81, 100]}></ArtisansKeyCapRow>
        <ArtisansKeyCapRow limit={[41, 60]}></ArtisansKeyCapRow>
      </div>
      <div className='side top'>
        <ArtisansKeyCapRow limit={[21, 40]}></ArtisansKeyCapRow>
        <ArtisansKeyCapRow limit={[61, 80]}></ArtisansKeyCapRow>
        <ArtisansKeyCapRow limit={[41, 60]}></ArtisansKeyCapRow>
        <ArtisansKeyCapRow limit={[1, 20]}></ArtisansKeyCapRow>
        <ArtisansKeyCapRow limit={[81, 100]}></ArtisansKeyCapRow>
      </div>
      <div className='side bottom'>
        <ArtisansKeyCapRow limit={[1, 20]}></ArtisansKeyCapRow>
        <ArtisansKeyCapRow limit={[81, 100]}></ArtisansKeyCapRow>
        <ArtisansKeyCapRow limit={[61, 80]}></ArtisansKeyCapRow>
        <ArtisansKeyCapRow limit={[41, 60]}></ArtisansKeyCapRow>
        <ArtisansKeyCapRow limit={[21, 40]}></ArtisansKeyCapRow>
      </div>
    </section>
  );
};

export default ArtisansKeyCap;
