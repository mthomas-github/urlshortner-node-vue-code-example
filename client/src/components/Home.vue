<template>
  <div>
    <div class="row">
      <div class="col col-12 offset-0 mt-2">
        <h1 class="jumbotron text-center text-white bg-primary">
          Create Shorten Url
        </h1>
      </div>
    </div>
    <div class="col col-8 align-middle mt-5 offset-2">
      <div class="card">
        <div class="card-body">
          <form @submit.prevent="submit(longUrl)">
            <div class="form group">
              <label for="url">Enter Url</label>
              <textarea
                type="url"
                class="form-control"
                v-model="longUrl"
                style="height: 150px"
              />
            </div>
            <div class="for-group" v-show="shortUrl">
              <p>
                Short URL: :
                <a :href="shortUrl" class="text-primary">{{ shortUrl }}</a>
              </p>
            </div>
            <div class="form-group">
              <button class="btn btn-primary" type="submit">Shorten Url</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => {
    return {
      longUrl: "",
      shortUrl: "",
    };
  },
  methods: {
    submit: async function (longUrl) {
      try {
        const api = "http://localhost:8000/shorturl/";
        const response = await axios.post(api, {
          longUrl,
        });
        console.log(response);
        this.shortUrl = response.data.shortUrl;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
