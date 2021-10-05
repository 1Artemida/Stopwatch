import { TimeFormatterPipe } from './time-formatter.pipe';

describe('TimeFormatterPipe', () => {
  const pipe = new TimeFormatterPipe();

  it('should create pipe', () => {
    expect(pipe).toBeTruthy();
  })
    
  describe('transform', () => {
    it('shouldn add zero to 1-digit number', () => {
      const result = pipe.transform(5);
      expect(result).toEqual('00:00:05');
    });

    it('shouldn"d add zero to 2-digit number', () => {
      const answer = pipe.transform(50);
      expect(answer).toEqual('00:00:50');
    });

    it('should calculate hours and minutes', () => {
      const result = pipe.transform(6000);
      expect(result).toEqual('01:40:00');
    });
  });
});
