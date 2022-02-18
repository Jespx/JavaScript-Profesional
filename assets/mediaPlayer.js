
      function MediaPlayer(config) {
          this.media = config.el;
        this.plugins = config.plugins || [];

        this._initPlugins();
      }

      MediaPlayer.prototype._initPlugins = function(){
        this.plugins.forEach(plugin=>{
          plugin.run(this);
        })
        
      };
      
      MediaPlayer.prototype.play = function() {
        this.media.play();
      };

      MediaPlayer.prototype.pause = function() {
        this.media.pause();
      };

      MediaPlayer.prototype.togglePlay = function() {
        if (this.media.paused) {
          this.play();
        } else {
          this.pause();
        }
      };

      MediaPlayer.prototype.mute = function(){
        if(this.media.muted == false){
             this.media.muted = true;
        }else{
            this.media.muted = false;
        }
      }

     
      export default MediaPlayer;