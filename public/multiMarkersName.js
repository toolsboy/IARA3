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

		var assetItemList = document.querySelector('a-assets');
		for(var k=0; k<=4; k++)
		{
			
			//adaugat de mine
			var model = document.createElement('a-asset-item');
			model.setAttribute('id', `model${k}`);
			model.setAttribute('position',"0 0 0");
			model.setAttribute('timeout', '15000');
			if(k == 0)
			{
				model.setAttribute('src', 'burger.glb');
			}
			if(k == 1)
			{
				model.setAttribute('src', 'chicken.glb');
			}
			if(k == 2)
			{
				model.setAttribute('src', 'fish.glb');
			}
			if(k == 3)
			{
				model.setAttribute('src', 'pizza.glb');
			}
			if(k == 4)
			{
				model.setAttribute('src', 'steak.glb');
			}
			assetItemList.appendChild(model);

			var markerEl = document.createElement('a-marker');
			markerEl.setAttribute('type','pattern');
			markerEl.setAttribute('url',markersURLArray[k]);
			markerEl.setAttribute('id',markersNameArray[k]);

			markerEl.setAttribute('registerevents','');
			var entity = document.createElement('a-entity');
			entity.setAttribute('gltf-model', `#model${k}`);
			if(k == 0)
			{
				entity.setAttribute('scale', '0.1 0.1 0.1');
			}
			if(k == 1)
			{
				entity.setAttribute('scale', '2 2 2');
				entity.setAttribute('rotation', '0 90 0');
			}
			if(k == 2)
			{
				entity.setAttribute('scale', '2 2 2');
				entity.setAttribute('position', '-30 0 0');
			}
			if(k == 3)
			{
				entity.setAttribute('scale', '0.4 0.4 0.4');
			}
			if(k == 4)
			{
				entity.setAttribute('scale', '0.1 0.1 0.1');
			}
			markerEl.appendChild(entity);
			sceneEl.appendChild(markerEl);
		}
	}
});

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
