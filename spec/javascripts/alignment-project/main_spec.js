describe("Main for alignment project", function() {
    it("slowly shows the vertical gradients", function() {
      setFixtures('<div data-id="overlay" style="display: none;"></div>')

      Alignment.showGradients();

      expect($('[data-id=overlay]').css('display')).toEqual('block')
    });
});
