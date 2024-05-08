<script>

export default {
  name: "data-manager",

  props: {
    items: Array,
    columns:{
      type: Array,
      default: () => []
    }
  },
  data(){
    return{
      selectedItems:[]
    }
  },
  methods: {
    editItem(item) {
      console.log("Editando item", item);
      this.$emit('edit-item', item);
    },
    confirmDeleteItem(item) {
      this.$confirm.require({
        message:          `Estas seguro que quieres eliminar  ${item.firstName}?`,
        header:           'Confirmation',
        icon:             'pi pi-exclamation-triangle',
        rejectClassName:  'p-button-secondary p-button-outlined',
        rejectLabel:      'Cancel',
        acceptLabel:      'Delete',
        acceptClassName:  'p-button-danger',
        accept:           () => this.$emit('delete-item', item),
        reject:           () => {}
      });
    }
  }
}
</script>

<template>
  <pv-confirm-dialog></pv-confirm-dialog>
  <pv-data-table
      ref="dt"
      v-model:selection="selectedItems"
      :paginator="true"
      :rows="10"
      :rows-per-page-options="[5, 10, 20]"
      :value="items"
      data-key="id"
      paginator-template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown">
    <pv-column :exportable="false" selectionMode="multiple" style="width: 3rem"/>
    <pv-column :sortable="true" field="id"          header="Id"           style="min-width: 12rem"/>
    <pv-column :sortable="true" field="firstName"       header="latName"        style="min-width: 16rem"/>
    <pv-column :sortable="true" field="lastName" header="firstName"  style="min-width: 16rem"/>
    <pv-column :sortable="true" field="email" header="email"  style="min-width: 16rem"/>
    <pv-column :sortable="true" field="info"      header="info"       style="min-width: 16rem"/>
    <pv-column :exportable="false" style="min-width:8rem">
      <template #body="slotProps">
        <pv-button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editItem(slotProps.data)"/>
        <pv-button icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteItem(slotProps.data)"/>
      </template>
    </pv-column>
  </pv-data-table>
</template>

<style scoped>

</style>
