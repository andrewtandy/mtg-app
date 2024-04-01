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
        <div class="card">
            <div class="card-brief">
                <span class="card-name">Elesh Norn, Mother of Machines</span>
                <span class="card-type">Legendary Creature — Phyrexian Praetor</span>
            </div>
            <!-- <img src="../src/assets/Images/FullCards/card-one.jpg" alt="" class="card-image"> -->
        </div>
        <div class="options">
            Buttons
        </div>
    </div>
</template>

<script>

</script>

<style>
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
    background-image: url("../src/assets/Images/FullCards/card-one.jpg");
    background-repeat: no-repeat;
    background-position: -200px -110px;
    background-size: 235%;
    max-width: 100%;
    border-radius: 25px;
    position: relative;
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


</style>