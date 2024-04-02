<template>
    <div class="container">
        
        <div class="header">
            <h1>Discover</h1>
            <div>
                <ul class="search-list">
                    <li class="search-tag">tag one</li>
                    <li class="search-tag">tag two</li>
                    <li class="search-tag">tag three</li>
                </ul>
            </div>
        </div>
        
        <div class="card card-shadow card-one">
            <div class="card-brief">
                <span class="card-name">Elesh Norn, Mother of Machines</span>
                <span class="card-type">Legendary Creature — Phyrexian Praetor</span>
            </div>
        </div>
        
        <div class="options">
            <div class="button"><img src="../src/assets/Images/Icons/unlike.png" alt="" class="btn-dislike"></div>
            <div class="button"><img src="../src/assets/Images/Icons/star.png" alt="" class="btn-fave"></div>
            <div class="button"><img src="../src/assets/Images/Icons/heart.png" alt="" class="btn-like"></div>
        </div>
    </div>
</template>

<script>

</script>

<style>
:root {
    --swamp: rgb(203, 194, 191);
    --forest: rgb(154, 210, 173);
    --mountain: rgb(255, 190, 168);
    --plains: rgb(255, 252, 209);
    --island: rgb(204, 254, 255);
    --dark-swamp: #000000;
    --dark-forest: #2f6a43;
    --dark-mountain: #E83411;
    --dark-plains: #8f8a43;
    --dark-island: #1a6486;
    --azorius: linear-gradient(var(--plains),var(--island));
    --boros: linear-gradient(var(--mountain),var(--plains));
    --dimir: linear-gradient(var(--island),var(--swamp));
    --rakdos: linear-gradient(to right, var(--dark-swamp),var(--dark-mountain));
    
    --plains-shadow: var(--dark-plains);
}

.container {
    display: grid;
    background-color: white;
    border: 1px solid grey;
    grid-template-rows: 1fr 6fr 1fr;
    padding: 1rem;
    margin: 0.5rem;
    grid-row-gap: 1rem;
}

.header {
    display: flex;
    flex-direction: column;
}

.search-list {
    display: flex;
    list-style: none;
    margin-left: 0;
    padding-left: 0;
    justify-content: space-around;
    margin-block-start: 0;
    margin-block-end: 0;
}

.search-tag {
    /* border: 1px solid black; */
    padding: 5px;
    border-radius: 10px;
    background-color: lightgrey;
    font-size: .8rem;
    font-style: italic;
    box-shadow: 1px 1px 3px lightgrey;
}

.card {
    display: flex;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: -210px -119px;
    background-size: 240%;
    max-width: 100%;
    border-radius: 25px;
    position: relative;
    /* box-shadow: 0px 4px 5px lightgray; */
    transform: translate(0);
    transform-style: preserve-3d;
}

.card-shadow::before {
    content: "";
    position: absolute;
    inset: 5px;
    transform: translate3d(0px, 10px, -1px);
    background: var(--rakdos);
    border-radius: inherit;
    filter: blur(10px);
}

.card-one {
    background-image: url("../src/assets/Images/FullCards/card-one.jpg");
}

.card-two {
    background-image: url("../src/assets/Images/FullCards/card-two.jpg");
}

.card-three {
    background-image: url("../src/assets/Images/FullCards/card-three.jpg");
}

.card-brief {
    position: absolute;
    bottom: 1rem;
    color: white;
    border-radius: .5rem;
    margin: .25rem;
    padding: .2rem;
    padding-left: .4rem;
    padding-right: .4rem;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(3px);

    /* width: 90%; */
}

.card-name {
    font-size: 1rem;
    font-weight: 500;
}

.card-type {
    font-size: .8rem;
    font-weight: 300;
}

.options {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* width: 80%; */
}

.button {
    display: flex;
    box-shadow: 0px 4px 5px lightgray;
    border-radius: 100%;
    align-items: center;
    padding: 1rem;
}

.button > img {
    width: 2rem;
}

.btn-dislike {
    position: relative;
    top: 3px;
    left: 1px;
}

.btn-fave {
    position: relative;
    top: -1px;
}

.btn-like {
    position: relative;
    top: 1px;
    
}


</style>