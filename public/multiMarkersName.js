//Global Variable
var markersURLArray=[];
var markersNameArray=[];

AFRAME.registerComponent('markers_start',{
	init:function(){
		console.log('Add markers to the scene');

		var sceneEl = document.querySelector('a-scene');
		
		//list of the markers
		for(var i=1; i<=5; i++)
		{
			var url="pattern-"+i+".patt";
			markersURLArray.push(url);
			markersNameArray.push('Marker_'+i);
			//console.log(url);
		}

		var assetEl = document.createElement('a-assets');
		sceneEl.appendChild(assetEl);

		for(var k=0; k<=4; k++)
		{
			var markerEl = document.createElement('a-marker');
			markerEl.setAttribute('type','pattern');
			markerEl.setAttribute('url',markersURLArray[k]);
			markerEl.setAttribute('id',markersNameArray[k]);

			markerEl.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl);

			
			var assetItemList = document.querySelector('a-assets');
			//adaugat de mine
			var model = document.createElement('a-asset-item');
			if(k == 0)
			{
				console.log("inainte de incarcarea modelului");
				model.setAttribute(k, {src: 'burger.glb'});
				console.log("am trecut de incarcarea modelului");
			}
			assetItemList.appendChild(model);

			var entity = document.createElement('a-entity');
			entity.setAttribute('entity'+k,{ "gltf-model=": k});
			sceneEl.appendChild(entity);
			//pana aici

			//decomenteaza si va aparea scris Marker_x
			// var textEl = document.createElement('a-entity');
			
			// textEl.setAttribute('id','text');
			// textEl.setAttribute('text',{color: 'red', align: 'center', value:markersNameArray[k], width: '5.5'});
			// textEl.object3D.position.set(0, 0.7, 0);
			// textEl.object3D.rotation.set(-90, 0, 0);

			// markerEl.appendChild(textEl);
		}
	}
});


//Detect marker found and lost
AFRAME.registerComponent('registerevents', {
		init: function () {
			const marker = this.el;

			marker.addEventListener("markerFound", ()=> {
				var markerId = marker.id;
				console.log('Marker Found: ', markerId);
			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				console.log('Marker Lost: ', markerId);
			});
		},
	});
