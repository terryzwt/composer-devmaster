(function($) {
  Drupal.behaviors.fileManager = {
    attach: function() {
      $('.file-manager').each(function() {
        var site = $(this).attr('rel');
        $(this).fileTree({
          root: '/',
          script: '/node/' + site + '/files',
          expandSpeed: 1000,
          collapseSpeed: 1000,
          multiFolder: false
        }, function(file) {
          openFile(site, file);
        });
      });
    }
  }

  function openFile(site, file) {
    window.open('/hosting_filemanager/' + site + '/openfiles?file=' + file);
  }
})(jQuery);

