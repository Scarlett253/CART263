import * as THREE from 'three';

// Planet class for Team A
export class PlanetA {
    constructor(scene, orbitRadius, orbitSpeed) {
        this.scene = scene;
        this.orbitRadius = orbitRadius;
        this.orbitSpeed = orbitSpeed;
        this.angle = Math.random() * Math.PI * 2;

        //Create planet group
        this.group = new THREE.Group()

        // Create planet
        //STEP 1:
        //TODO: Create a planet using THREE.SphereGeometry (Radius must be between 1.5 and 2).
        //TODO: Give it a custom material using THREE.MeshStandardMaterial.
        //TODO: Use castShadow and receiveShadow on the mesh and all future ones so they can cast and receive shadows.
        //TODO: Add the planet mesh to the planet group.

        //STEP 2:
        //TODO: Add from 1 to 3 orbiting moons to the planet group.
        //TODO: The moons should rotate around the planet just like the planet group rotates around the Sun.

        /** Moons */
        this.moons = [];

        // Creat 3 moons
        const moonCount = 3;
        for (let i = 0; i < moonCount; i++) {
            //Pivot group for moon orbit
            const moonPivot = new THREE.Group();

            /** Moon mesh */
            const moonGeometry = new THREE.SphereGeometry(0.4, 32, 32);
            const moonMaterial = new THREE.MeshStandardMaterial({
                color: 0x00ccff,
                emissive: 0x003333,
                emissiveIntensity: 0.6,
                roughness: 0.4,
                metalness: 0.2
            });

            const moon = new THREE.Mesh(moonGeometry, moonMaterial);

            //Make them glow
            const glowGeometry = new THREE.SphereGeometry(0.55, 32, 32);
            const glowMaterial = new THREE.MeshBasicMaterial({
                color: 0x00ffaa,
                transparent: true,
                opacity: 0.3,
            });

            const glow = new THREE.Mesh(glowGeometry, glowMaterial);
            moon.add(glow);

            //Add light
            const moonLight = new THREE.PointLight(0x00ffaa, 0.5, 10);
            moon.add(moonLight);

            //Shadows
            moon.castShadow = true;
            moon.receiveShadow = true;

            //Orbit radius moon and planet
            moon.position.x = 3 + i * 0.5;

            //Add moon to pivot group
            moonPivot.add(moon);

            //Add pivot group to planet group
            this.group.add(moonPivot);

            //Save for animation
            this.moons.push({
                pivot: moonPivot,
                speed: 0.5 + Math.random()
            });
        }



        //STEP 3:
        //TODO: Load Blender models to populate the planet with multiple props and critters by adding them to the planet group.
        //TODO: Make sure to rotate the models so they are oriented correctly relative to the surface of the planet.

        //STEP 4:
        //TODO: Use raycasting in the click() method below to detect clicks on the models, and make an animation happen when a model is clicked.
        //TODO: Use your imagination and creativity!

        this.scene.add(this.group);
    }

    update(delta) {
        // Orbit around sun
        this.angle += this.orbitSpeed * delta * 30;
        this.group.position.x = Math.cos(this.angle) * this.orbitRadius;
        this.group.position.z = Math.sin(this.angle) * this.orbitRadius;



        //TODO: Do the moon orbits and the model animations here.
        // Rotate planet
        this.group.rotation.y += delta * 0.5;
        // Rotate moons
        this.moons.forEach(moon => {
            moon.pivot.rotation.y += delta * moon.speed;
        });
    }

    click(mouse, scene, camera) {
        //TODO: Do the raycasting here.
    }
}

