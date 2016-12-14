<template>
<div>
<file-uploader @file-uploaded="fileUploaded(arguments[0])"
				accept="image/*"
				multiple="true"
				:locale="locale">
			</file-uploader>
</div>
</template>

<script>
</script>

<style>
</style>
