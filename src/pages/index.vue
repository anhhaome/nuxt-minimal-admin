<template>
  <div>
    <div class="m-container">
      <b-row>
        <b-col>
          <div class="m-panel">
            <h4>Welcome</h4>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <div class="m-panel">
            <h4>Table</h4>
            <table class="m-table">
              <thead>
                <th>Name</th>
                <th>Age</th>
              </thead>
              <tbody>
                <tr>
                  <td>Cat</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Dog</td>
                  <td>6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-col>
      </b-row>
    
      <div class="row">
        <div class="col col-12 col-md-6">
          <div class="m-panel">
            <h4>List</h4>
            <b-list-group>
              <b-list-group-item button @click="$noti('success', 'success')">success</b-list-group-item>
              <b-list-group-item button @click="$noti('danger', 'danger')">danger</b-list-group-item>
              <b-list-group-item button @click="$noti('info', 'info')">info</b-list-group-item>
              <b-list-group-item button @click="$noti('warning', 'warning')">warning</b-list-group-item>
              <b-list-group-item button @click="$noti('error', 'error')">error</b-list-group-item>
            </b-list-group>
          </div>
        </div>

        <div class="col col-12 col-md-6">
          <div class="m-panel">
            <h4>List 2</h4>
            <b-list-group>
              <b-list-group-item>Cras justo odio</b-list-group-item>
              <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
              <b-list-group-item>Morbi leo risus</b-list-group-item>
              <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
              <b-list-group-item>Vestibulum at eros</b-list-group-item>
            </b-list-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>