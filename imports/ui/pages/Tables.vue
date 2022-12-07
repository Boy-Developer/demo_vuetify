<template>
    <div>
        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Calories
                </th>
                <th>
                    About
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="item in desserts"
                    :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.about }}</td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
    </div>
</template>
<script>
    export default {
        name: "Table",
        data:()=>({
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    calories: 159,
                    about : 'abc'
                },
                {
                    name: 'Ice cream sandwich',
                    calories: 237,
                    about : 'efg'
                },
            ]
        })
    }
</script>